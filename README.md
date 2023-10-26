# FF-Style
**F**ormat **F**igma **S**tyle to CSS-IN-JS


## Before
```css
color: var(--Theme, #FF8F34);
text-align: center;
font-family: PingFang SC;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 133.333% */
```

## After
```css
color: "var(--Theme, #FF8F34)",
textAlign: "center",
fontFamily: "PingFang SC",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "16px", 
```

## Features
- Camel-Case to key
- Quotation mark to value
- Replace semicolon with comma
- Remove comments
- Ignore braces

## Installation
To run **ffs**, you should install this package globally:
```sh
$ sudo npm i -g ff-style
```

## Usage
1. Copy CSS in Figma and paste in fileToFormat.
2. Make sure you have installed ff-style **globally**.
3. Run the command below:
```js
ffs ./fileToFormat
```


