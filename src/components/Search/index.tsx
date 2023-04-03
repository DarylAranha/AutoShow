import { useState } from "react";
import { View, StyleSheet } from "react-native"
import { SearchBar } from "@rneui/base";

export default (props: {
    
}) => {
    const [search, setSearch] = useState("");

    const updateSearch = (search: string) => {
        setSearch(search);
    };

    return (
        <View style={styles.view}>
            <SearchBar
                placeholder="Search"
                onChangeText={updateSearch}
                value={search}
                containerStyle={{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: "#AAA9A9",
                    borderRadius: 10,
                }}
                inputContainerStyle={{
                    backgroundColor: "#fff",
                }}
                searchIcon={{ size: 25 }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    view: {
      margin: 10,
    },
});