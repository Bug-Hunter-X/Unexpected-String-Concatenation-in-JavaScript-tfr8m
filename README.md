# Unexpected String Concatenation in JavaScript
This repository demonstrates a common JavaScript error where loose typing leads to unexpected string concatenation instead of numerical addition.  The `bug.js` file shows the problem, and `bugSolution.js` provides a solution.

## Problem
In JavaScript, the `+` operator performs both addition and string concatenation depending on the operands' types. When one operand is a string and the other a number, the result is string concatenation.  This can be unexpected and lead to incorrect calculations.

## Solution
The solution involves explicit type checking or type coercion to ensure that both operands are numbers before performing addition.