import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sampleApi } from '../api/sample';
import { useEffect } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: "purple",
        borderWidth: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 16
    },
    preview: {
        marginTop: 24
    },
    previewTitle: {
        fontSize: 16,
        marginBottom: 12,
        fontWeight: '600'
    },
});

export function HomeScreen({ navigation }: { navigation: any }) {
    const safeAreaInsets = useSafeAreaInsets();
    const containerStyles = [styles.container, { paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom }];
    const { data, isLoading } = sampleApi();

    useEffect(() => {
        console.log("initiated");
    }, [])

    useEffect(() => {
        console.log("Data : ", data);
    }, [data]);

    useEffect(() => {
        console.log("Loading : ", isLoading);
    }, [isLoading]);

    return (
        <View style={containerStyles}>
            <Text style={styles.title}>Home Screen</Text>
            <Pressable onPress={() => navigation.navigate("Details")} style={{ padding: 12, backgroundColor: "blue", borderRadius: 8, width: 150, alignItems: "center" }}>
                <Text style={{ color: "white" }}>Go to Details</Text>
            </Pressable>
            <View style={styles.preview}>
                <Text style={styles.previewTitle}>React Navigation is integrated.</Text>
                <Text style={styles.previewTitle}>{JSON.stringify(data)}</Text>
                <Text style={styles.previewTitle}>{JSON.stringify(isLoading)}</Text>
            </View>
        </View>
    );
}