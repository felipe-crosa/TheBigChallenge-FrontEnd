import * as React from 'react';
import {
    useAutocomplete,
    AutocompleteGetTagProps,
} from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';


const medicalAreas = ['pediatrics','general','plastics','trauma','sdfgddsfg','dsfg','sfdg','hst',
'sdfgdsfg']

const Root = styled('div')(
    ({ theme }) => `
    width: 320px;
   margin: 10px 10px 0;   
  font-size: 14px;
  overflow: hidden;
  z-index: 0;
`,
);



const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
    ({ theme }) => `
    
  width: 300px;
  height:fit;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    height: 15px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
    label: string;
}

function Tag(props: TagProps) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

const StyledTag = styled(Tag)<TagProps>(
    ({ theme }) => `
  align-items: center;
  height: 24px;
  margin: 4px 3px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  padding: 0 4px 0 10px;
  overflow: visible;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 20px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled('ul')(
    ({ theme }) => `
    
  width: 150px;
  margin: 2px 12px 0;
  padding: 0;
  position: absolute;
  background-color: #fff;
  overflow: scroll;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
   font-size: 14px;
    margin: 1px;
    padding: 2px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 200;

    & svg {
      margin: 2px 0 0;
      color: #1890ff;
    }
  }

  
`,
);

export default function CustomizedHook() {
    const {
        getRootProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
        popupOpen
    } = useAutocomplete({
        id: 'customized-hook-demo',
        defaultValue: medicalAreas,
        multiple: true,
        options: medicalAreas,
        autoComplete: true,
        getOptionLabel: (option) => option,
    });

    return (
        <Root>
            {groupedOptions.length > 0 ? (
                <div>
                    <Listbox {...getListboxProps()}>
                        {(groupedOptions as string[]).map((option, index) => (
                            value.includes(option)?'':
                                <li {...getOptionProps({ option, index })}>
                                    <p>{option}</p>
                                    <CheckIcon fontSize="small" />
                                </li>
                        ))}
                    </Listbox>
                </div>
            ) : null}
            <div {...getRootProps()}>
                <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                    {value.map((option: string, index: number) => (
                        <StyledTag label={option} {...getTagProps({ index })} />
                    ))}
                    <input {...getInputProps()} />
                </InputWrapper>
            </div>

        </Root>
    );
}

