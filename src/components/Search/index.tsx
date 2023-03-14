import { useState } from "react";
import { View } from "react-native"
import { SearchBar } from "@rneui/base";

const [searchValue, setSearch] = useState('')

export default (props: {
    onUpdateSearch: (text: string) => void
}) => {
    return (
        <View>
            <SearchBar 
                placeholder="Search"
                onChangeText={() => {}}
                value={searchValue}
            />
        </View>
    )
}