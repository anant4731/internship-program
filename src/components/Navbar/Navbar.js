import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.nav}>
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
};
export default Navbar;

// import React from "react";
// import classes from "./Navbar.module.css";
// import { Typography, Button, Box } from "@mui/material";
// import { NavLink, Link } from "react-router-dom";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 200,
//   height: 300,
//   bgcolor: "#121210",
//   border: "2px solid #000",
//   color: "white",
//   boxShadow: 24,
//   p: 4,
//   display: "flex",
//   alignItems: "center",
//   flexDirection: "column",
//   justifyContent: "space-around",
// };
// const Navbar = (props) => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   return (
//     <div className={classes.nav}>
//       {open && (
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Typography
//               id="modal-modal-title"
//               variant="h6"
//               component="h2"
//               textAlign={"center"}
//               fontWeight={800}
//             >
//               STARTUP STORY
//             </Typography>

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flexDirection: "column",
//               }}
//             >
//               <NavLink
//                 onClick={handleClose}
//                 style={{ margin: "0.5rem 0" }}
//                 to={"/"}
//               >
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   HOME
//                 </Typography>
//               </NavLink>
//               <NavLink
//                 onClick={handleClose}
//                 style={{ margin: "0.5rem 0" }}
//                 to={"/speakers"}
//               >
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   SPEAKERS
//                 </Typography>
//               </NavLink>
//               <NavLink
//                 onClick={handleClose}
//                 style={{ margin: "0.5rem 0" }}
//                 to={"/schedule"}
//               >
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   SCHEDULE
//                 </Typography>
//               </NavLink>
//               <NavLink
//                 onClick={handleClose}
//                 style={{ margin: "0.5rem 0" }}
//                 to={"/venue"}
//               >
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   VENUE
//                 </Typography>
//               </NavLink>
//               <NavLink
//                 onClick={handleClose}
//                 style={{ margin: "0.5rem 0" }}
//                 to={"/contact"}
//               >
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   CONTACT
//                 </Typography>
//               </NavLink>
//             </Box>
//           </Box>
//         </Modal>
//       )}
//       <div className={classes.container}>
//         <div onClick={handleOpen} className={classes.menu__icon}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <NavLink to={"/"}>
//           <Typography
//             color={"black"}
//             variant="h5"
//             letterSpacing={1}
//             fontWeight={600}
//           >
//             LOGO
//           </Typography>
//         </NavLink>
//         <div className={classes.nav_links__container}>
//           <ul className={classes.list}>
//             <li>
//               <NavLink to={"/"}>
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   HOME
//                 </Typography>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/speakers"}>
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   SPEAKERS
//                 </Typography>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/schedule"}>
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   SCHEDULE
//                 </Typography>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/venue"}>
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   VENUE
//                 </Typography>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/contact"}>
//                 <Typography
//                   color={"black"}
//                   variant="h7"
//                   letterSpacing={1}
//                   fontWeight={600}
//                 >
//                   CONTACT
//                 </Typography>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <Link to={"/checkout"}>
//             <Button sx={{ minWidth: "10rem" }} variant="contained" size="large">
//               LINK
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
