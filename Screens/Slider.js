import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    }
}

export default class extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            imagesSlider: [
                require('../assets/Img/Bienestar1.jpg'),
                require('../assets/Img/Bienestar3.jpg'),
                require('../assets/Img/bienestar2.jpg')
            ]
        }
    }
    render(){
        return (
            <View style={{flex:1}}>
                <Swiper
                    autoplay
                    height={240}
                >
                {
                    this.state.imagesSlider.map((item, i) => <Slider 
                        uri={item}
                        key={i}
                    />)
                }

                </Swiper>
            </View>
        )
    }
}