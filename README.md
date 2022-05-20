# Chrollo UI

An accessible and awesome styled-components for React. Supports semantic containers and layouts inspired from flutter. Supports declarative spacing between elements and so much more!

*Written in Typescript and Styled-components - Work in progress*

## Usage

Install and add to your project
```bash
npm i chrollo-ui
```

Import the global css file from `chrollo-ui`.
This will apply all needed stylings for the components. 

Please refer to your React framework docs on where to add global styling. In `NextJs` this should be imported inside `_app.ts` file.

```typescript
import 'chrollo-ui/dist/global.css';
```
**Using in your tsx/jsx files**
```typescript
// import the components from chrollo-ui
import { Button, Text, Column } from 'chrollo-ui';

export default function Home() {
    return (
        // use as a regular html tags with useful additional props
        <Column p={2}>
            <Text as='h2'> I am awesome </Text>
            <Button> Learn more </Button> 
        </Column>
    )
}
```

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
```typescript
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
    Normal div with no alignment or any additional styling except for the inherited `Spacing` and `BoxStyles` css.

    Example:
    ```html
    <Box> 
        <p> your content </p>
    </Box>
    ```
- ### Row
    A flex container with horizontal mainAxis. Children of a Row are layed out horizontally **(left to right)**.
    This is equivalent to `display: flex` where the direction is `row` by default.

    Props:
    ```typescript
    type Row = {
        reverse?: boolean; // (flex-direction: row-reverse) if set to true, row by default
        gap?: string;
        // sets the justify-content value in the css
        mainAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";
        // sets the align-items value in the css
        crossAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";
    };
    ```
    Examples:
    ```html
    <Row>
        <Box> child </Box>
        <Box> next child </Box>
        <Box> next child </Box>
    </Row>

    <Row mainAxisAlignment='center' gap='1rem'>
        <Box> child </Box>
        <Box> next child </Box>
        <Box> next child </Box>
    </Row>
    ```
- ### Column
    A flex container with vertical mainAxis. Children of a Column are layed out vertically **(top to bottom)**.
    This is equivalent to...
    ```css
    Column {
        display: flex;
        flex-direction: column;
    }
    ```
    Props:
    ```typescript
    type Column = {
        reverse?: boolean; // (flex-direction: column-reverse) if set to true, column by default
        gap?: string;
        // sets the justify-content value in the css
        mainAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";
        // sets the align-items value in the css
        crossAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-around" | "space-evenly" | "space-between";
    };
    ```
    Examples:
    ```html
    <Column>
        <Box> child </Box>
        <Box> next child </Box>
        <Box> next child </Box>
    </Column>

    <Column crossAxisAlignment='center' gap='1rem'>
        <Box> child </Box>
        <Box> next child </Box>
        <Box> next child </Box>
    </Column>
    ```

- ### Center
    A flex container where all of its children are justified and aligned to the center. If multiple child are given, you can pass a `direction` prop which sets the alignment of the children in the center. It is `row` by default. Center is equivalent to the following css below...
    ```css
    Center {
        display: flex;
        flex-direction: row; <!-- default -->
        justify-content: center;
        align-items: center;
    }
    ```
    Props:
    ```typescript
    type Center = {
        gap?: string;
        direction?: "row" | "column";
    }
    ```
    Examples:
    ```html
    <!-- single element positioned in the center with padding of 2 rem -->
    <Center p={3}>
        <Box> item </Box>
    </Center>

    <!-- centered in the horizontal axis, from left to right -->
    <Center p={3}>
        <Box> item 1 </Box>
        <Box> item 2 </Box>
        <Box> item 3 </Box>
    </Center>

    <!-- centered in the vertical axis, from top to bottom -->
    <Center p={3} direction='column'>
        <Box> item 1 </Box>
        <Box> item 2 </Box>
        <Box> item 3 </Box>
    </Center>
    ```
- ### Position
    This container is positioned absolute relative to its parent. So it is important to set the `position` property of the parent as `relative` if you don't want this to position absolute in the body.

    Props:
    ```typescript
    type Position = {
        top?: number | string,
        bottom?: number | string,
        left?: number | string,
        right?: number | string,
    }
    ```
    Examples:
    ```html
    <Box p={3}>
        <!-- the items below will be positioned absolute relative to the document body -->
        <!-- all items below will stack at each other -->
        <Position> item 1 </Position>
        <Position> item 2 </Position>
        <Position> item 3 </Position>
    </Box>
    
    <Box p={3}>
        <Position> item 1 </Position>
        <!-- item 2 below will be placed 0 pixels from the right of the document body -->
        <Position right={0}> item 2 </Position>
        <Position> item 3 </Position>
    </Box>

    <!-- to fix the issue of positioning relative to the document body, 
    just add position='relative' to the parent -->
    <Box p={3} position='relative'>
        <Position> item 1 </Position>
        <!-- now this item 2 below will be placed 0 pixels from the right of the parent Box -->
        <Position right={0}> item 2 </Position>
        <Position> item 3 </Position>
    </Box>
    ```

### Special CSS Classes for Containers (Give it a try!😜👌)
- `fancy`
- `matte_glass`
- `matte_glass_colored`

# Input
This is a normal input element with `small` variant. This can be also a textarea by passing prop `as='textarea'`.

Props:
```typescript
type Input = {
    small?: boolean;
}
```
Example:
```html
<!-- normal input -->
<Input type='text' placeholder='Username' />
<!-- small input -->
<Input type='text' placeholder='Username' small />
<!-- textarea -->
<Input as='textarea' placeholder='Textarea'  />
```