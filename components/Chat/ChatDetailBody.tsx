import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';
import TimeDuration from './TimeDuration';

interface Props {
    message: string;
    timeStamp: Date;
    messageDirect: boolean;
};

const ChatDetailBody: React.FunctionComponent<Props> = ({
    message,
    timeStamp,
    messageDirect,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View style={[style.container, messageDirect ? {flexDirection: 'row'}: {flexDirection: 'row-reverse'}]}>
            <View style={ messageDirect ? style.topContentContainer : style.flipContentContainer }>
                <View style={style.timeContainer}>
                    <TimeDuration
                        date={timeStamp}
                    />
                </View>
            </View>
            <View style={ messageDirect ? [style.topContentData, {backgroundColor: theme.lightBottomColor}] :  [style.flipContentData, {backgroundColor: 'rgb(176, 224, 230)'}]}>
                <View style={style.dataContainer}>
                    <ThemedText styleKey="textColor" style={style.userNameStyle}>{message}</ThemedText>
                </View>
            </View>
        </View>
    );
};

export default ChatDetailBody;

interface Style {
    container: ViewStyle;
    topContentContainer: ViewStyle;
    flipContentContainer: ViewStyle;
    timeContainer: ViewStyle;
    dataContainer: ViewStyle;
    userNameStyle: TextStyle;
    topContentData: ViewStyle;
    flipContentData: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        paddingTop: 30,
        flex: 1,
    },
    topContentContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    topContentData: {
        flexDirection: 'row-reverse',
        flex: 2,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    flipContentContainer: {
        flexDirection: 'row-reverse',
        flex: 1,
        alignItems: 'center',
    },
    flipContentData: {
        flexDirection: 'row',
        flex: 2,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    timeContainer: {
        flex: 1,
        alignItems: 'center',
    },
    dataContainer: {
        flex: 2,
        padding: 20,
    },
    userNameStyle: {
        fontSize: 14,
    }
})
