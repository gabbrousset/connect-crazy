import { memo } from 'react';

const Cell = memo(({ value, className, style }) => (
    <div
        className={`cell color-${value} ${className ? className : ''}`}
        style={style}
    />
));

export default Cell;
