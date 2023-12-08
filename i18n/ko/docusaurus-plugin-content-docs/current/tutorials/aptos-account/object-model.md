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

Object model은 리소스 제어, 소유권 관리, 이벤트 발생 기능을 제공하여 체인 상호작용의 기능과 유연성을 향상시키는 종합적인 기능 프레임워크를 도입합니다.

Object model의 주요 동기는 Move가 다양한 복잡한 타입들을 하나의 주소 내에 저장된 리소스 컬렉션으로 표현할 수 있도록 하는 것입니다.

이러한 방식으로 리소스를 조직함으로써, 오브젝트는 NFT, 토큰, 게임 내 플레이어 오브젝트와 같은 특수 데이터 구조를 포괄할 수 있습니다. 이 모델은 타입 안전성 향상, 데이터 접근성 강화, 오브젝트에서 직접 이벤트를 발생시킬 수 있는 능력 등 여러 장점을 제공합니다.

기존의 Aptos 데이터 모델은 Move 내의 store 능력에 의존하여, 구조체를 글로벌 저장소에 저장할 수 있습니다. 그러나 이 접근법에는 한계가 있습니다.

- **제한된 데이터 접근성:** 사용자 정의 리소스 내에 데이터를 배치함으로써 접근이 불가능하거나 해당 데이터에 대한 기대된 동작을 위반할 수 있습니다. 이는 사용자와 크리에이터에게 혼란을 야기할 수 있습니다.

- **데이터 타임 혼합:** 서로 다른 데이터 타입을 'any' 타입을 사용하여 단일 데이터 구조에 저장할 수 있지만, 이는 역직렬화로 인한 추가 비용을 발생시킵니다. 또한 개발자들이 특정 필드가 특정 타입을 대표하길 바랄 때 혼란을 초래할 수 있습니다.

- **데이터 조합성 부족:** Move는 현재 재귀적 데이터 구조에 대한 제한을 가지고 있어, 데이터의 조합성이 제한됩니다. 또한, 진정한 재귀적 데이터 구조는 보안 취약점을 야기할 수 있습니다.

- **복잡한 데이터 참조:** entry 함수 내에서 기존 데이터를 참조하는 것은 상당한 코드를 요구합니다. 문자열 검증을 위한 고유 키를 지원하는 것이 복잡해져 개발 효율성을 저해합니다.

- **제한된 이벤트 발생:** 이벤트는 계정에서만 발생할 수 있으며, 관련 데이터에서 직접적으로 발생할 수 없어서 이벤트 추적이 분리됩니다.

- **비용이 많이 드는 전송 로직:** 전송 로직이 모듈별 API에 제한되어, 발신자와 수신자 모두에게 불필요한 비용 부담과 자원 로딩을 초래합니다.

## `object.move` **분석** 

Object model의 구성에 대해 자세히 살펴보겠습니다: 핵심 구조는 네 가지 구성 요소로 이루어져 있습니다.

```rust
struct `ObjectCore` has key {
    guid_creation_num: u64,
    owner: address,
    allow_ungated_transfer: bool,
    transfer_events: event::EventHandle<TransferEvent>,
}
```
- **`guid_creation_num`:** 고유 식별자.
- **`owner`:** 소유자의 주소(객체나 계정에 관련된 경우).
- **`allow_ungated_transfer`:** 객체의 전송 가능 여부를 활성화하거나 비활성화하는 부울 변수입니다. 이 변수를 전송의 실행을 허용하는 열린(참) 상태와 제한하는 닫힌(거짓) 상태의 게이트로 상상해볼 수 있습니다.
- **`transfer_events`:** 전송이 일어날 때마다 발생되는 전송 이벤트입니다.

이 변수들은 각각 객체의 고유성, 소유권 세부 사항, 전송 가능 상태, 그리고 검색 가능성을 의미합니다. 애초에 핵심 구조를 포함함으로써, Move 프레임워크 내의 희소성 원칙이 효과적으로 검증됩니다.

[희소성은 주어진 시스템 내에서 특정 객체나 자산의 제한된 가용성을 의미합니다.

첫째, 각 객체에 할당된 `guid_creation_num`은 어떤 두 개체도 동일한 신원을 공유하지 않도록 보장합니다. 이 고유성은 희귀성과 독점성을 조성하여, 각 객체를 명확하게 식별하고 다른 것과 구별할 수 있습니다.

둘째, 객체나 계정에 연관된 `owner` 주소는 희소성을 더욱 강화합니다. 명시적으로 소유자를 지정함으로써 객체에 대한 소유권과 통제성을 설정하고, 특정 개인이나 엔티티에게 가용성을 제한합니다. 이러한 소유 기반 제한은 소유권 이전이 의도적이고 통제된 방식으로 이루어지도록 함으로써 희소성을 유지하는 데 도움이 됩니다.

`allow_ungated_transfer`는 전송을 활성화하거나 비활성화하는 게이트로서, 희소성 강화에 추가적인 레이어를 추가합니다. 전송을 규제하고 제한할 수 있는 능력을 제공함으로써, 이 모델은 소유자가 객체가 언제, 누구에게 전송될 수 있는지 결정할 수 있게 합니다. 이 메커니즘은 무단 또는 원치 않는 전송을 방지하여, 소유권 통제를 통해 객체의 희소성을 강화합니다.

마지막으로, 전송이 일어날 때마다 발생되는 `transfer_events`는 시스템의 전반적인 탐지 가능성과 투명성에 기여합니다. 이 이벤트는 전송의 확인 및 기록으로 작용하여, 참가자들이 소유권 변경을 인지하고 객체 이동을 추적하는 데 도움이 됩니다. 전송 과정에 대한 가시성을 제공함으로써, 이 모델은 객체의 희소성이 명백하고 검증 가능하도록 보장합니다.]

이러한 속성들이 객체 모델을 정의합니다.

- 간소화된 저장 인터페이스.
- 데이터 및 소유권 모델은 글로벌하게 접근 가능.
- 확장 가능한 프로그래밍 모델.
- 간소화된 저장 인터페이스: 객체 모델은 다양한 리소스들을 함께 저장할 수 있도록 지원하여, 서로 다른 데이터 타입들을 위한 공통의 핵심 데이터 레이어를 제공합니다. 즉, 다양한 데이터 타입들이 함께 저장될 수 있습니다.

이 기능의 목적은 데이터 타입들이 공통 기능과 리소스를 공유하면서도 각 데이터 타입에 특화된 더 풍부한 확장을 허용하는 것입니다. 예를 들어, 핵심 데이터 계층은 모든 객체에 공통적인 공유 속성이나 특성을 포함할 수 있으며, 확장은 각 객체 타입(예: 콘서트 티켓 객체는 콘서트 이벤트와 관련된 추가 속성을 가질 수 있음)에 특화된 추가적인 속성이나 행동을 포함할 수 있습니다.

저장 및 검색 과정을 간소화하기 위해, 객체 내의 리소스들은 동일한 저장소를 공유합니다. `#[resource_group(scope = global)]`

이는 또한 다양한 리소스 타입들 사이에서 공통의 데이터 구조나 핵심 데이터 계층의 공유를 가능하게 합니다. 예를 들어, 객체 내의 모든 리소스는 공통적인 토큰 세트나 기본 데이터 필드를 공유할 수 있습니다. `#[resource_group_member(group = aptos_framework::object::ObjectGroup)]`

`Object<phantom T>` 구조체는 다양한 타입의 객체들을 통합된 방식으로 저장하고 검색할 수 있게 하여, Move 저장소에 저장된 객체들과 상호작용하기 위한 간소화된 인터페이스를 제공합니다.

- 데이터 및 소유권 모델은 글로벌하게 접근 가능합니다. 객체들과 그것들의 관련 데이터는 특정한 범위나 모듈에 국한되지 않고 글로벌하게 접근 가능하기 때문에 어디에서나 접근하고 관리할 수 있습니다.

### Structs

- `ObjectCore`: 이 구조체는 객체의 핵심 속성을 정의합니다. 여기에는 소유자, 전송 가능성, 그리고 객체와 관련된 이벤트들이 포함됩니다. 이것은 객체의 소유권과 데이터 모델을 대표합니다.

- `Object<phantom T>`: 이 구조체는 객체에 대한 포인터를 나타냅니다. 객체의 주소를 보유하며 기본 데이터에 대한 접근을 허용합니다. 이것은 객체의 데이터 모델을 대표합니다.

- `ConstructorRef`, `DeleteRef`, `ExtendRef`, `TransferRef`, `LinearTransferRef`, `DeriveRef`: 이러한 구조체들은 객체의 생성, 삭제, 확장, 전송 및 파생과 같은 다양한 작업을 수행하기 위한 참조나 핸들을 나타냅니다. 이들은 객체의 소유권과 데이터 모델에 대한 접근을 제공합니다.

### Functions

- `create_named_object`, `create_object_from_account`, `generate_delete_ref`, `generate_extend_ref`, etc.: 이 함수들은 객체를 생성하고, 참조를 생성하며, 객체에 대한 작업을 수행함으로써 객체 모델을 조작합니다. 이들은 객체의 데이터 및 소유권 모델과 상호 작용합니다.

- 이 구조는 글로벌하게 접근 가능한 데이터 및 소유권 모델을 사용하여 객체를 생성하고 관리하는 것을 촉진하며, 객체에 대한 다양한 작업을 수행하고 이벤트 처리를 지원합니다.

- 확장 가능한 프로그래밍 모델: 이는 객체의 원래 구현을 수정하지 않고 객체의 행동을 확장하고 사용자 정의할 수 있는 기능을 의미합니다. 개발자들이 기존 코드를 직접 수정하지 않고도 새로운 기능을 추가하거나 기존 행동을 수정하거나 특정 사용 사례에 맞게 객체를 특화할 수 있도록 합니다.

이러한 구조체와 함수들은 객체를 생성, 구성, 확장, 전송, 파생, 변환, 삭제하는 메커니즘을 제공하여, 사용자 애플리케이션의 개별화를 가능하게 하고 핵심 프레임워크를 활용할 수 있게 합니다.

:::note
일반적으로 입력 검증, 접근 제어, 적절한 이벤트 처리 및 단위 테스트는 잠재적 보안 취약점을 식별하는 데 효과적입니다.
:::

## 구현 예제 — Ticket as Object

[https://github.com/Aladeenb/simple-ticket](https://github.com/Aladeenb/simple-ticket)

이 모듈은 객체 모델의 간단한 티켓에 대한 구현입니다.

- 티켓은 객체를 나타내며,  price과 seat 두 가지 변수로 구성됩니다.
- seat는 다른 객체를 나타내며, category와 price_modifier라는 두 가지 변수를 가지고 있으며, 업그레이드될 수 있습니다.
- 더 자세한 내용을 확인하려면 [클릭](https://github.com/Aladeenb/simple-ticket)하십시오.

:::note
TODO: 티켓은 전송될 수 있으므로, 그 기능을 추가합니다.
:::

---

## Object model implementations within Aptos Framework:

다음 구현 사항들은 다음 기사에서 설명됩니다.

[Aptos Token v2: an object-based token model](https://github.com/aptos-labs/aptos-core/tree/fbc88b83099558421aea6f62296d890c1c2c82df/aptos-move/framework/aptos-token-objects)

[Aptos Fungible Asset: an object-based fungible asset model](https://github.com/aptos-labs/aptos-core/tree/fbc88b83099558421aea6f62296d890c1c2c82df/aptos-move/framework/aptos-token-objects)

[Primary Fungible Store: a support module for managing and transferring fungible assets](https://github.com/aptos-labs/aptos-core/blob/fbc88b83099558421aea6f62296d890c1c2c82df/aptos-move/framework/aptos-framework/sources/primary_fungible_store.move)