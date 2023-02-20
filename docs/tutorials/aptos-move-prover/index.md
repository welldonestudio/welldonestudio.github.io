---
title: APTOS Move Prover
description: Aptos Move Prover Tutorial 
sidebar_position: 4
---

# Aptos Move Prover

## Introduction
Move Prover is a tool for verifying your move smart contract.
If you describe specifications with MSL(Move Specification Language) for a function,
move prover checks if the specifications are satisfied for all inputs of the function.
Unlike unit test, verification of MSL is exhaustive and holds for all possible inputs
and global states of a Move module or transaction scripts.

## Create Template

Create a simple example contract code written in Move.
You can create a sample contract `hello_prover` by selecting the template option
and clicking the `Create Template` button.

![template-code-aptos](img/template-code-aptos-hello-prover.png?raw=true 'template-code-aptos-hello-prover')

### Source Code To Prove

Note that `plus1` function is intentionally implemented wrongly
to see if move prover really works.

```rust title="prove.move"
module 0x42::prove {
    fun plus1(x: u64): u64 {
        // x+1
        x+2 // error intended
    }
    
    spec plus1 {
        ensures result == x+1;
    }
    
    fun abortsIf0(x: u64) {
        if (x == 0) {
            abort(0)
        };
    }

    spec abortsIf0 {
        aborts_if x == 0;
    }
}
```

## Project To Prove

Select the project you want to verify using move prover. For now, let's choose `aptos/hello_prover`

![new-project-aptos](img/project-to-compile-hello-prover.png?raw=true 'project-to-compile-hello-prover')

## Prove

Click the `Prove` button. This button trigger aptos cli command `aptos move prove` for your project.

![new-project-aptos](img/move-prove-button.png?raw=true 'move-prove-button')

## Check Out The Result

Move prover results in an error message because it found the error case which the result is not equal to x plus 1.

![new-project-aptos](img/move-prove-fail.png?raw=true 'move-prove-fail')

## Correct The Source Code And Prove Again

Comment out `x+2` and uncomment `x+1` and click `Prove` button again.

```rust title="prove.move"
module 0x42::prove {
    fun plus1(x: u64): u64 {
        x+1
        // x+2 // error intended
    }
    
    spec plus1 {
        ensures result == x+1;
    }
    
    fun abortsIf0(x: u64) {
        if (x == 0) {
            abort(0)
        };
    }

    spec abortsIf0 {
        aborts_if x == 0;
    }
}
```

You will see the verification success message like below.

![new-project-aptos](img/move-prove-pass.png?raw=true 'move-prove-pass')


---

### Reference

[https://osec.io/blog/tutorials/2022-09-16-move-prover](https://osec.io/blog/tutorials/2022-09-16-move-prover)

[https://github.com/move-language/move/blob/main/language/move-prover/doc/user/prover-guide.md](https://github.com/move-language/move/blob/main/language/move-prover/doc/user/prover-guide.md)