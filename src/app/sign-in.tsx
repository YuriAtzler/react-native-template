import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { View } from "react-native";

export function SignIn() {
  return (
    <View className="gap-3 items-center justify-center flex-1">
      <Button variant="destructive">
        <Text>This is a component</Text>
      </Button>
      <Text>To install new nativecn components, write:</Text>
      <Text className="bg-gray-200 px-3 py-1 rounded">
        npx nativecn add [component] -c "src"
      </Text>
    </View>
  );
}
