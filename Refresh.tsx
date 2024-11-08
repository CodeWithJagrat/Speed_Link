import React from 'react';
import { View, Text } from 'react-native';
import {Svg, Path} from 'react-native-svg';

const App = () => {
    return (
        <View>
            <Svg viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                <Path d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
        </View>
    );
};

export default App;