import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch, UseSwitchProps } from '@mui/base/SwitchUnstyled';
import {FC} from "react";

const blue = {
    700: '#0059B2',
};

const grey = {
    400: '#BFC7CF',
    800: '#2F3A45',
};

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 36px;
  padding: 8px;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')`
  position: absolute;
  display: block;
  background-color: ${blue[700]};
  width: 30px;
  height: 30px;
  border-radius: 8px;
  top: 3px;
  left: 4px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: url('doctor.svg') center center no-repeat;
    i;
    background-size: 70% 70%;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(24px);

    &::before {
      background-image: url('person.svg')
      }
  }
`;

const SwitchTrack = styled('span')(
    ({ theme }) => `
  background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[400]};
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: block;
`,
);

function MUISwitch(props: UseSwitchProps) {
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

    const stateClasses = {
        checked,
        disabled,
        focusVisible,
    };

    return (
        <SwitchRoot className={clsx(stateClasses)}>
            <SwitchTrack>
                <SwitchThumb className={clsx(stateClasses)} />
            </SwitchTrack>
            <SwitchInput {...getInputProps()} aria-label="Demo switch" />
        </SwitchRoot>
    );
}

type Props = {
    changeEvent: Function
}

const UseSwitchesCustom: FC<Props>= (props: Props) => {
    return <MUISwitch onChange={()=>props.changeEvent()} defaultChecked />;
}

export default UseSwitchesCustom;