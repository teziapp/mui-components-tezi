import { IconButton } from "@mui/material";
import { T_Dialog } from "./DialogCustom";
import SvgColor from "./SvgColor";

export const CloseButton = ({onClose, ...other}:{onClose: T_Dialog['onClose']}) => (
  <IconButton onClick={(e) => onClose(e, 'backdropClick')} {...other}>
    <SvgColor iconFileName="close-fill" />
  </IconButton>
)