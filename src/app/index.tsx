import { Text, View } from "react-native";

/**
 * Index page.
 */
const Index = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#c4a48433",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 16,
          maxWidth: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            textAlign: "center",
            color: "#4e2a20",
          }}
        >
          Welcome to React Native!
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            textAlign: "center",
            color: "#4e2a20",
          }}
        >
          I'm Orin 🤎
        </Text>
      </View>

      {/* chat bubble tail */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 12,
          borderRightWidth: 12,
          borderTopWidth: 16,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderTopColor: "#c4a48433",
        }}
      />
    </View>

    <Text style={{ fontSize: 120 }}>🦦</Text>
  </View>
);

export default Index;
