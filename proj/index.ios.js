/**
 * hitmas
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textColored: {
        backgroundColor: 'orange'
    },
    textNormal: {
        backgroundColor: 'green'
    }
});

export default class proj extends Component {
    colorText() {
        this.textColored = true;
    }

    resetText() {
        this.textColored = false;
    }

    textColored() {
        if (this.textColored) {
            return styles.textColored;
        } else {
            return styles.textNormal;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPressIn={this.colorText}  onPressOut={this.resetText}>
                  <View><Text style={styles.textColored}>Press this button to change colors, but only slightly</Text></View>
                </TouchableHighlight>
            </View>
        );
    }
}

AppRegistry.registerComponent('proj', () => proj);
