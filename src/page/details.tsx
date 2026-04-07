import { Button, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#00ff',
        borderWidth: 3,
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 16,
    },
    detailText: {
        fontSize: 16,
        lineHeight: 24,
    },
    preview: {
        marginTop: 24,
    },
    previewTitle: {
        fontSize: 16,
        marginBottom: 12,
        fontWeight: '600',
    },
});


export function DetailsScreen() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: safeAreaInsets.top,
                    paddingBottom: safeAreaInsets.bottom,
                },
            ]}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Details Screen</Text>
                <Text style={styles.detailText}>
                    This screen is available via React Navigation native stack.
                </Text>
            </View>
        </View>
    );
}