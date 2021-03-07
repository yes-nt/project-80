import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View>
                <Icon
                    name='bars'
                    type='font-awesome'
                    color='#123ABC'
                    onPress={() => this.props.navigation.toggleDrawer()} />
                <Text>Settings Screen</Text>
            </View>
        );
    }
}