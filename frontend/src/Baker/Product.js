import React,{useState,useEffect} from 'react'
import Sidebar from '../Component/Sidebar'
// import {GiHamburgerMenu} from 'react-icons/gi'
import {VscAdd} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'
import './product.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router'
import axios from 'axios'

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <AiOutlineClose />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  

function Product() {
    const [open, setOpen] = useState(false);
    const [showNav,setShowNav] = useState(true);
    const [input, setInput] = useState({
      name:'',
      color:'#B61919'
    })
    const [catlist,setCatList]=useState(["a"])

    var catNum=1;

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // var displayNav = ()=>{
    //     setShowNav(!showNav)
    // } 
   
    const handleChange = (e) =>{
      const {name,value} = e.target;
      setInput({
        ...input,
        [name] : value
      })
  }

    const addCat = (e) =>{
      e.preventDefault()
      if(!input){

      }else{
        setCatList([...catlist,input]);
        setInput('')
      }
    }

    const history = useHistory()
    const verifyUser = async () =>{
        axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/baker')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

    useEffect(() => {
        verifyUser();
    }, [])


    return (
    <>
    {/* <header className="bakerHeader">
        <GiHamburgerMenu size={30} onClick={displayNav}/>
    </header> */}
    <Sidebar  show={showNav} />
   
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Add Catagory
        </DialogTitle>
        
        <DialogContent dividers>
          <Typography gutterBottom>
            <label>Add Name </label>&nbsp;&nbsp;&nbsp;
            <input type="text"value={input.name} onChange={handleChange} name="name"/>
          </Typography>

          {/* <Typography gutterBottom>
            <label>Background Color </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="color" value={input.color} onChange={handleChange} name="color"/>
          </Typography> */}

        </DialogContent>
        
        <DialogActions>
          <Button onClick={addCat} color="primary" type="submit">    
          {/* onClick={addCat,handleClose} */}
            Add
          </Button>
        </DialogActions>
      </Dialog>
      
      <div className="bakerProductList">
        
        <div className="categorymain">
          <div className="bakerAddProduct" style={{backgroundColor: "#B61919"}}  onClick={handleClickOpen}>
              <VscAdd size={50} style={{marginLeft:"4.5rem",marginTop:"4.5rem",color:"#FDD2BF"}}/>
          </div>  
          <div className="addCategory">
              <h4>Add catageory</h4>
          </div>  
        </div>

        {
            catlist.map((item,ind)=>{
              return (
              //   <div key={ind} style={{background:item.color, width:"150px", height:"150px"}}>
              //     Name  : {item.name}<br/>
              //     Color : {item.color} 
              // </div>
              <div className="bakerProductList">
                <div className={catNum%4===0 ? 'bakerAddProduct' : 'bakerAddProductRest'} style={{backgroundColor: "#B61919"}} >
                <div style={{textAlign:"center" , fontSize:'2rem' ,marginTop:'5rem', color:"#FDD2BF" }}>
                    <h4 className="catName">{item.name}</h4>
                </div>
                <div className="disHandle">{catNum+=1}</div>
                </div>   
              </div>
              )
            })
        }


      </div>

    </>
    )
}

export default Product
