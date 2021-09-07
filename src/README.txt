// Design
Value: Input[ABC]
Current value = ABC

Button[Undo]
Button[Redo]

// Example
Initial Value: ""
Change Value: "ABC"
Change Value: "ABCDEF"
Change Value: "AB"

Undo: "ABCDEF"
Undo: "ABC"
Undo: ""

Redo: "ABC"
Change Value: "XYZ"
Redo: ??
Undo: "ABC
