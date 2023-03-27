import React from "react"
import Bananas from "@mui/material/Rating"
// link to interactive star rating from Material UI- "Bananas" is only used as a keyword

 export default class Stars extends React.Component {
render() {
    return(
        <div>
<Bananas /> 
{/* value={2} readOnly */}
{/* return rating component from Material UI */}
        </div>
    )
}
 }



// import React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// export default class Stars extends React.Component {

// function BasicRating() {
//   const [value, setValue] = React.useState(2);

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//       <Typography component="legend">Read only</Typography>
//       <Rating name="read-only" value={value} readOnly />
//       <Typography component="legend">Disabled</Typography>
//       <Rating name="disabled" value={value} disabled />
//       <Typography component="legend">No rating given</Typography>
//       <Rating name="no-value" value={null} />
//     </Box>
//   );
// }
// }