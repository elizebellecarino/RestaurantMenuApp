import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import mainBurger from '../../assets/main_burger.jpg'
import mexican from '../../assets/mexican.jpg'
import Caption from '../../Captions/Caption';
import Caption2 from '../../Captions/Caption2'
class MainMenu extends Component {

    render() {
        return (
            <View style={styles.container}>
     
                <ScrollView>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:330,height:170}} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                        <Image source={mainBurger} style={{width:"100%",height:"100%"}} />
                        </TouchableOpacity>
                    </View> 
                    </View>
                   <Caption/>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:330,height:170}} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                        <Image source={mexican} style={{width:"100%",height:"100%"}} />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <Caption2/>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:330,height:170}} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                        <Image source={mainBurger} style={{width:"100%",height:"100%"}} />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <Caption/>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:330,height:170}} >
                        <Image source={mexican} style={{width:"100%",height:"100%"}} />
                    </View>
                    </View>
                    <Caption2/>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:330,height:170}} >
                        <Image source={mainBurger} style={{width:"100%",height:"100%"}} />
                    </View>
                    </View>
                    <Caption/>
                    
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})
export default MainMenu;