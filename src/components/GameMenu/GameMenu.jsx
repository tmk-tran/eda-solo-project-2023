// import React from 'react';
// import Button from '@mui/material/Button';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';

// export default function MenuListComposition() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <Stack direction="row" spacing={2}>
//       <div>
//         <Button
//           ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           Score
//         </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
//                     onKeyDown={handleListKeyDown}
//                   >
//                     <MenuItem onClick={handleClose}>7: </MenuItem>
//                     <MenuItem onClick={handleClose}>8: </MenuItem>
//                     <MenuItem onClick={handleClose}>9: </MenuItem>
//                     <MenuItem onClick={handleClose}>Bullseye:</MenuItem>
//                     <MenuItem onClick={handleClose}>Close</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </div>
//     </Stack>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

const CustomTargetMenu = ({ buttonLabel, targetOptions }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div id="game-menu">
        <Button
          ref={anchorRef}
          id="custom-target-button"
          aria-controls={open ? "custom-target-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
        >
          {buttonLabel}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="custom-target-menu"
                    aria-labelledby="custom-target-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {targetOptions.map((option, index) => (
                      <MenuItem key={index} onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                    <MenuItem onClick={handleClose}>Close</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default CustomTargetMenu;
