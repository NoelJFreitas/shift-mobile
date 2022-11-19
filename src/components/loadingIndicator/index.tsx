import { View, Modal, ActivityIndicator } from "react-native";
import styles from "./styles";

type ILoadingIndicator = {
  visible: boolean;
};

const LoadingIndicator: React.FC<ILoadingIndicator> = ({ visible }) => {
  return (
    <Modal visible={visible} style={styles.OverlayWrapper} transparent>
      <View style={styles.OverlayWrapper}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default LoadingIndicator;
