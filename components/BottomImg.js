import React from 'react'
import { View ,Image} from 'react-native'



const BottomImg = () => {
    return (
      <View style={{width:"100%",position:"absolute",bottom:0,zIndex:1}}>
        <View style={{width:"100%",display:"flex",alignItems:"flex-start"}}>
        <Image source={require('../assets/Ellipse28.png')} style={{marginLeft:"30%"}} alt='img' />
        </View>
        <Image source={require('../assets/Vector4.png')} style={{width:"100%"}} alt='img' />
      </View>
    )
  }



export default BottomImg
