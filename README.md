![](https://images.velog.io/images/alskt0419/post/7517c720-e26c-4b7c-82f0-c16fb1652ea2/progress_preview.gif)

https://www.npmjs.com/package/@ohaeseong/react-progress-bar

## Install

```
npm install @ohaeseong/react-progress-bar
```

or

```
yarn add @ohaeseong/react-progress-bar
```

## Compatibility

- React 18 / React 19
- SSR (Next.js) supported

## Usage

```tsx
import ProgressBar from '@ohaeseong/react-progress-bar';

function App() {
  return <ProgressBar value={80} />;
}
```

> No hooks are used internally, so it works as a React Server Component (RSC) in Next.js App Router without `'use client'`.

### Using max prop

```tsx
// value 25, max 50 → displays 50%
<ProgressBar value={25} max={50} />
```

### Label Position

```tsx
// Top label
<ProgressBar value={60} labelAlignment="top" />

// Bottom label
<ProgressBar value={60} labelAlignment="bottom" />

// Hide label
<ProgressBar value={60} labelVisible={false} />
```

### Custom Styling

```tsx
<ProgressBar
  value={75}
  width="300px"
  height="20px"
  color="#eee"
  trackColor="#ff6347"
  borderRadius="10px"
  labelColor="#fff"
  labelSize="0.9rem"
  transitionDuration="0.5s"
  transitionTimingFunction="ease"
/>
```

## Props

| Name                     | Type                                                | Default       | Description                                        |
| ------------------------ | --------------------------------------------------- | ------------- | -------------------------------------------------- |
| value (required)         | number                                              | -             | Current progress value                             |
| max                      | number                                              | 100           | Maximum value (value/max * 100 = percentage)       |
| width                    | string                                              | auto          | Width of the bar                                   |
| height                   | string                                              | 15px          | Height of the bar                                  |
| margin                   | string                                              | none          | Margin of the bar                                  |
| color                    | string (color code)                                 | #E5E7E9       | Color of the "non-completed" bar                   |
| trackColor               | string (color code)                                 | #706af3       | Color of the completed bar                         |
| borderRadius             | string                                              | 3px           | Border radius of the bar                           |
| labelColor               | string (color code)                                 | #f9f9f9       | Label color of the bar                             |
| labelSize                | string (1rem, 12px ...)                             | 0.8rem        | Label size of the bar                              |
| labelVisible             | boolean (true === show label, false === hide label) | true          | Visibility of the label                            |
| transitionDuration       | string (1s, 0.5s ...)                               | 1s            | Duration of the width transition                   |
| transitionTimingFunction | string (ease, ease-in, ease-in-out ...)             | ease-in-out   | Timing function of the width transition            |
| labelAlignment           | string (top, bottom, null === center)               | null (center) | Position of the label                              |
