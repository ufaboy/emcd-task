interface UserResponse {
	results: Array<User>;
	info: Meta;
}
interface User {
	name: UserName;
	email: string;
	picture: UserPicture;
}

interface UserName {
	title: string;
	first: string;
	last: string;
}

interface UserPicture {
	large: string;
	medium: string;
	thumbnail: string;
}

interface Meta {
	seed: string;
	results: number;
	page: number;
	version: string;
}

type ListQuery = Record<string, string | number> & {
	page: number;
	results: number;
};

export type { User, ListQuery, UserResponse };
