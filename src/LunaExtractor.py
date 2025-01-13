import ast

import mistune


def is_valid_python(code):
    try:
        ast.parse(code)
    except SyntaxError:
        return False
    return True


def extract_codeblock(markdown: str, *, only_python_code=True) -> list[str]:
    """extract code block from markdown"""
    ast = mistune.create_markdown(renderer="ast")(markdown)
    if isinstance(ast, str):
        return []
    raw_codeblocks = [
        element.get("raw", "") for element in ast if element.get("type") == "block_code"
    ]
    if only_python_code is False:
        return raw_codeblocks

    # filter out python code
    return [cb for cb in raw_codeblocks if is_valid_python(cb)]


if __name__ == "__main__":
    md = """
paragraph `inline code`
    
```python3
print("Hello world!")
1 + 1
```

```python
print("Hello world again!")
```

```rust
let a: i32 = 1;
```

"""
    assert (extract_codeblock(md)) == [
        'print("Hello world!")\n1 + 1\n',
        'print("Hello world again!")\n',
    ]

    assert (extract_codeblock(md, only_python_code=False)) == [
        'print("Hello world!")\n1 + 1\n',
        'print("Hello world again!")\n',
        "let a: i32 = 1;\n",
    ]
