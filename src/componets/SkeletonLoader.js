import React from "react";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";

// Skeleton Item Component
const SkeletonItem = ({ width, height, borderRadius }) => {
  const opacity = useSharedValue(0.3);

  React.useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.skeleton, { width, height, borderRadius }, animatedStyle]}>
      <LinearGradient
        colors={["#f0f0f0", "#e0e0e0", "#f0f0f0"]}
        style={[styles.skeleton, { width, height, borderRadius }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </Animated.View>
  );
};

// Skeleton Loader Layout (Similar to Your Image)
const SkeletonLoader = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SkeletonItem width="90%" height={20} borderRadius={5} />
      <View style={styles.row}>
        <SkeletonItem width="45%" height={100} borderRadius={8} />
        <SkeletonItem width="45%" height={100} borderRadius={8} />
      </View>

      {/* Horizontal Items */}
      <SkeletonItem width="80%" height={15} borderRadius={5} />
      <View style={styles.circleRow}>
        {[1, 2, 3, 4].map((_, index) => (
          <SkeletonItem key={index} width={50} height={50} borderRadius={25} />
        ))}
      </View>

      {/* Large Blocks */}
      <SkeletonItem width="90%" height={15} borderRadius={5} />
      <SkeletonItem width="90%" height={130} borderRadius={10} />

      {/* Footer */}
      <View style={styles.footer}>
        {[1, 2, 3, 4].map((_, index) => (
          <SkeletonItem key={index} width={40} height={40} borderRadius={20} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  skeleton: {
    backgroundColor: "#e0e0e0",
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 10,
  },
  circleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 20,
  },
});

export default SkeletonLoader;
