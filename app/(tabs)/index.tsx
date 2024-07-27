import { H3, Text, View } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import { PopOver } from "@/components/PopOver";

export default function HomeScreen() {
  return (
    <View marginTop={500}>
      <H3 color={"white"} textAlign="center">
        Popover Component
      </H3>
      <PopOver placement="bottom" Icon={ChevronDown} Name="bottom-popover" />
    </View>
  );
}
