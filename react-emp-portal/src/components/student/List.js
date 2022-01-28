import React from "react";
import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useParams } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useHistory} from "react-router-dom";



const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
     const classes = useStyles();
     const history = useHistory();
     
     const [students, setStudents] = useState([]);

     useEffect(() => {
          getAllStudent();
 }, [])

 async function getAllStudent(id) {

         const students = await axios.get("http://localhost:3333/students")
          // console.log(students.data);
          setStudents(students.data);
          
          
     }

 const handleDelete = async id => {
          await axios.delete(`http://localhost:3333/students/${id}`);
     
          var newstudent = students.filter((item) => {  
          return item.id !== id;
          
     })
          
  setStudents(newstudent);
  setOpen(false);
  history.push("/");

 }

 const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  
  
  const handleClose = () => {
     setOpen(false);
     history.push("/");
  };


 return (
  <>
   <Box textAlign="center" p={2} className={classes.stuListColor}>
    <Typography variant="h4">Employee List</Typography>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {
       students.map((student, i) => {
        return (
         <TableRow key={i}>
          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="center">{student.stuname}</TableCell>
          <TableCell align="center">{student.email}</TableCell>
          <TableCell align="center">
           <Tooltip title="View">
            <IconButton><Link to={`/view/${student.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${student.id}`}><EditIcon /></Link></IconButton>
           </Tooltip>

          <Tooltip title="Delete">
               <IconButton onClick={handleClickOpen}>
                    <DeleteIcon color="secondary" />
               </IconButton>     
          </Tooltip>
          <Dialog
               open={open}
               onClose={handleClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description">

               <DialogTitle id="alert-dialog-title">
                    {"Are you sure to delete this data?" }
               </DialogTitle>

               <DialogContent>Confirm to delete {student.stuname} data?</DialogContent>

               <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => {handleDelete(student.id)}} autoFocus>Confirm</Button>
               </DialogActions>
          </Dialog>
          
          </TableCell>
         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>
  </>
 )
}

export default List;