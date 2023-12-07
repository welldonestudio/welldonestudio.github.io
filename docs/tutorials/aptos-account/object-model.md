---
title: Object Model
description: Learning Move 0x01
sidebar_position: 3
---

# Object Model

<div>
  <span className='author-sm'>December 8, 2023</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/aladeenb' target='_blank'><img src='https://avatars.githubusercontent.com/aladeenb' /></a>
    </div>
    <div>
      <span className='author-name'>Aladeenb (LAY)</span><br/>
      <span className='author-sm'>Blockchain Engineer, Townesquare </span>
    </div>
  </div>
</div>

## Introduction

Object model introduces a comprehensive capability framework that facilitates control over resources, ownership management, and event emission, which in return enhances the functionality and flexibility of on-chain interactions.

The primary motivation behind the object model is to enable Move to represent a set of different complex types as a one collection of resources stored within a single address.

By organizing resources in this manner, objects can encompass various elements such as NFTs, tokens, and specialized data structures like player objects within a game. The model offers several advantages, including improved type-safety, enhanced data access, and the ability to emit events directly from objects.

The existing Aptos data model relies on the store ability within Move, allowing structs to be stored in global storage. However, this approach has limitations:

- **Limited data accessibility:** Data can be placed within user-defined resources, making it inaccessible or violating the expected behavior for that data. This can cause confusion for users and creators.

- **Mixing data types:** Different data types can be stored in a single data structure using the “any” type, but this incurs additional costs due to deserialization. It also introduces confusion when developers expect a specific field to represent a particular type.

- **Lack of data composability:** Move currently has restrictions on recursive data structures, which limits the composability of data. Moreover, true recursive data structures can lead to security vulnerabilities.

- **Complex data referencing:** Referencing existing data within entry functions requires substantial code. Supporting unique keys for string validation becomes intricate, hindering development efficiency.

- **Limited event emission:** Events can only be emitted from an account, not directly from associated data, leading to disjointed event tracking.

- **Costly transfer logic:** Transferring logic is restricted to module-specific APIs, resulting in unnecessary cost overhead and resource loading for both senders and receivers.

## **Analyzing** `object.move`

Let’s delve into the composition of the object model: The core structure compromised of four components.

```rust
struct `ObjectCore` has key {
    guid_creation_num: u64,
    owner: address,
    allow_ungated_transfer: bool,
    transfer_events: event::EventHandle<TransferEvent>,
}
```
- **`guid_creation_num`:** A distinctive identifier.
- **`owner`:** The owner's address (whether pertaining to an object or an account).
- **`allow_ungated_transfer`:** A boolean variable enabling or disabling the object's transferability. Visualize this variable as a gate, allowing the execution of transfers when in the open (true) state, and restricting them when closed (false).
- **`transfer_events`:** The transfer event that is emitted whenever a transfer takes place.

These variables represent the object’s uniqueness, ownership details, transferability status, and discoverability, respectively. By already encompassing the core structure, the principles of scarcity within the Move framework is effectively validated.

[Scarcity refers to the limited availability of a particular object or asset within a given system.

Firstly, `guid_creation_num` assigned to each object ensures that no two entities share the same identity. This uniqueness fosters a sense of rarity and exclusivity, as each object can be distinctly identified and differentiated from others.

Secondly, `owner` address associated with the object or account further enhances scarcity. By explicitly designating an owner, it establishes a sense of ownership and control over the object, limiting its availability to a specific individual or entity. This owner-based restriction helps maintain scarcity by ensuring that the transfer of ownership is intentional and controlled.

`allow_ungated_transfer`, acting as a gate for enabling or disabling transfer, adds an additional layer of scarcity enforcement. By providing the ability to regulate and restrict transfers, the model empowers owners to determine when and to whom an object can be transferred. This mechanism prevents unauthorized or undesired transfers, reinforcing the scarcity of the object by granting ownership control.

Finally, `transfer_events`, emitted whenever a transfer occurs, contributes to the overall discoverability and transparency of the system. This event serves as an acknowledgment and record of the transfer, allowing participants to be aware of ownership changes and facilitating the tracking of object movement. By providing visibility into the transfer process, the model ensures that the scarcity of an object is evident and verifiable.]

These properties define the object model:

- simplified storage interface.
- data and ownership model are globally accessible.
- extensible programming model.
- simplified storage interface: the object model supports a heterogeneous collection of resources to be stored together, providing a common core data layer for different data types. This means that different data types can be stored together.

The purpose of this feature is to enable data types to share common functionality and resources while still allowing for richer extensions specific to each data type. For example, the core data layer may contain shared properties or attributes that are common to all objects, while the extensions may contain additional properties or behaviors specific to each object type (e.g., a concert ticket object may have additional properties related to the concert event).

In order to simplifies the storage and retrieval process, resources within an object share the same storage. `#[resource_group(scope = global)]`

This also enables the sharing of common data structures or core data layers among different resource types. For example, all resources within an object can share a common set of tokens or basic data fields. `#[resource_group_member(group = aptos_framework::object::ObjectGroup)]`

The `Object<phantom T>` struct allows for the storage and retrieval of objects of different types in a unified manner, providing a simplified interface to interact with the objects stored in the Move storage.

- data and ownership model are globally accessible. Objects and their associated data can be accessed and managed from anywhere since they are not confined to specific scopes or modules but are accessible globally.

### Structs

- `ObjectCore`: This struct defines the core properties of an object, including the owner, transferability, and events associated with the object. It represents the ownership and data model of an object.

- `Object<phantom T>`: This struct represents a pointer to an object. It holds the address of the object and allows access to the underlying data. It represents the data model of an object.

- `ConstructorRef`, `DeleteRef`, `ExtendRef`, `TransferRef`, `LinearTransferRef`, `DeriveRef`: These structs represent references or handles to perform various operations on objects, such as creation, deletion, extension, transfer, and derivation. They provide access to the ownership and data model of an object.

### Functions

- `create_named_object`, `create_object_from_account`, `generate_delete_ref`, `generate_extend_ref`, etc.: These functions manipulate the object model by creating objects, generating references, and performing operations on objects. They interact with the data and ownership model of objects.

- This structure promotes creating and managing objects with a globally accessible data and ownership model, enabling various operations on objects and supporting event handling.

- extensible programming model: This refers to the ability to extend and customize the behavior of objects without modifying their original implementation. It allows developers to add new functionality, modify existing behavior, or specialize objects for specific use cases without directly modifying the underlying code.

These structs and functions provide mechanisms to create, configure, extend, transfer, derive, convert, and delete objects, allowing for individualization of user applications and leveraging the core framework.

:::note
as a general rule, input validation, access control, appropriate event handling, and unit testing are effective to identify and potential security vulnerabilities.
:::

## Implementation example — Ticket as Object

[https://github.com/Aladeenb/simple-ticket](https://github.com/Aladeenb/simple-ticket)

This module represents a simple ticket implementation of the object model:

- A ticket represents an object, it consists of 2 variables, price and seat.
- A seat represents another object, it has 2 variables as well, category and price_modifier, and it can be upgraded.
- [click for more details](https://github.com/Aladeenb/simple-ticket)

:::note
TODO: Tickets can be transferred; add a function for that.
:::

---

## Object model implementations within Aptos Framework:

The following implementations will be explained in future articles:

[Aptos Token v2: an object-based token model](https://github.com/aptos-labs/aptos-core/tree/fbc88b83099558421aea6f62296d890c1c2c82df/aptos-move/framework/aptos-token-objects)

[Aptos Fungible Asset: an object-based fungible asset model](https://github.com/aptos-labs/aptos-core/tree/fbc88b83099558421aea6f62296d890c1c2c82df/aptos-move/framework/aptos-token-objects)

[Primary Fungible Store: a support module for managing and transferring fungible assets](https://github.com/aptos-labs/aptos-core/blob/fbc88b83099558421aea6f62296d890c1c2c82df/aptos-move/framework/aptos-framework/sources/primary_fungible_store.move)