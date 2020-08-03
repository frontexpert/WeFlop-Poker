import React from 'react';
import { Line } from '../../components';

interface LinesProps {
    height?: string;
    color?: 'primary' | 'secondary';
    align?: string | undefined;
    noRightLine?: boolean;
}

const Lines = ({ height, color, align, noRightLine }: LinesProps) => {
    return (
        <div className="lines-container" style={height ? { height } : {}}>
            <Line color={color} width="long" align={!align ? 'left' : undefined} />
            {!noRightLine && <Line color={color} width="long" align="right" />}
        </div>
    );
};

Lines.defaultProps = {
    color: 'primary',
};

export default Lines;