import { Pagination, Spacer } from "@/components";
import { Header } from "@/components/common/header";
import { URL_PARAM_PERSONNEL } from "@/constants";
import { useSearchCryptoArray } from "@/hooks";
import { PersonnelInfoType } from "@/types";
import { PersonnelList } from "@/units";
import { FilterSection, MainStructure } from "./units";

const App = () => {
	const { getArray: getPersonnel } =
		useSearchCryptoArray<PersonnelInfoType>(URL_PARAM_PERSONNEL);

	return (
		<MainStructure>
			<Header />
			<Spacer
				width="100%"
				height="2rem"
			/>
			<FilterSection />
			<Spacer
				width="100%"
				height="2rem"
			/>
			<PersonnelList />
			<Spacer
				width="100%"
				height="3rem"
			/>
			<Pagination
				totalPage={Math.floor((getPersonnel().length - 1) / 20) + 1}
			/>
		</MainStructure>
	);
};

export default App;
