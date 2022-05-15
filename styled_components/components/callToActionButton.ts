import styled from 'styled-components';
import Spacing, { SpacingProps } from '../inherited/spacing';

export type CallToActionType = SpacingProps & {
  cursorPointer?: boolean;
  width?: string;
};

const CallToActionButton = styled.button<CallToActionType>`
  ${Spacing};
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  margin: 16px 0;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: 0.2px;
  transition: background-color 0.2s;
  color: #0d0d0d;
  background-color: hsla(0, 0%, 100%, 0.9);
  background-clip: padding-box;
  border: 3px solid hsla(0, 0%, 100%, 0.3);
  border-radius: 8px;
  width: ${(props) => props.width || 'max-content'};
  cursor: ${(props) => (props.cursorPointer ? 'pointer' : 'normal')};
  &:hover {
    background-color: hsla(0, 0%, 100%, 1);
  }
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 0;
    left: 5px;
    right: 5px;
    z-index: -1;
    background: conic-gradient(
      from 147.14deg at 50% 50%,
      #0294fe -55.68deg,
      #ff2136 113.23deg,
      #9b4dff 195deg,
      #0294fe 304.32deg,
      #ff2136 473.23deg
    );
    opacity: 0.6;
    filter: blur(20px);
    border-radius: 6px;
  }
`;

export default CallToActionButton;