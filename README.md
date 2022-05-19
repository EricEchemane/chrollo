# Chrollo UI

An accessible and awesome styled-components for React. Supports semantic containers and layouts inspired from flutter. Supports declarative spacing between elements and so much more!

`npm i chrollo-ui` - *Work in progress*

## Spacing
Spacing is a css that is being inherited by all components. It contains several props for declarative spacing of your elements to control each element's paddings and margins. It is flexible and minimal.

**Spacing APi**
| prop name | css equivalent | data type        |
|-----------|----------------|------------------|
| p         | padding        | string or number |
| pt        | padding-top    | number           |
| pb        | padding-bottom | number           |
| pl        | padding-left   | number           |
| pr        | padding-right  | number           |
| m         | margin         | string or number |
| mt        | margin-top     | number           |
| mb        | margin-bottom  | number           |
| ml        | margin-left    | number           |
| mr        | margin-right   | number           |

*Examples:*

```html
    <Box p="1rem 2rem" m="1rem 1.5rem"> </Box>
    <Box p={2} m={1}> </Box>
    <Box pt={2} mt={1}> </Box>
    <Box pb={2} mb={1}> </Box>
    <Box pr={2} mr={1}> </Box>
    <Box pl={2} ml={1}> </Box>
```
## BoxStyles
Box styles are css props inherited by container components such as `Box, Row, Column, Center, and Position`. The following code shows the available props you can pass to container elements.

**BoxStyles API**
```javascript
type BoxStyles = {
    border?: string;
    radius?: string; // border-radius
    shadow?: string; // box-shadow
    height?: string; 
    width?: string;
    position?: string;
    overflow?: string;
    display?: string;
    transform?: string;
    background?: string;
    opacity?: number;
};
```
Examples:
```html
<Box border='1px solid red'> Your Content Here </Box>

<Center shadow='2px 2px 14px hsla(0, 0%, 100%, .5)'>
    <Text> Hello World </Text>
    <Text> Hello World </Text>
</Center>
```


<br/>

<h1 align='center'> Components </h1>

## Containers
All components below inherit styles from `BoxStyles` and `Spacing` css. It can accept different props. See [BoxStyles](#boxstyles) and [Spacing](#spacing) props.

- ### Box
    Normal div with no alignment or any additional styling.
- ### Row
    A flex container with horizontal mainAxis. Children of a Row are layed out horizontally **(left to right)**..
- ### Column
    A flex container with vertical mainAxis. Children of a Column are layed out vertically **(top to bottom)**.
- ### Center
    Child of a Center is positioned in the center. If multiple child are given, you can pass a `direction` prop which sets the alignment of the children in the center. It is `row` by default.
- ### Position
    This container is positioned absolute in relation with its parent. So it is important to set ```position: relative``` of the parent if you don't want this to position absolute in the body.

### Special CSS Classes for Containers
- `fancy`
- `matte_glass`
- `matte_glass_colored`