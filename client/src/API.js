const PORT_POST = 3333;
const PORT_COMMENT = 3334;

const HOSTNAME = `http://localhost:`;

export const POST_API = `${HOSTNAME}` + `${PORT_POST}` + `/posts`;
export const COMMENT_API = `${HOSTNAME}` + `${PORT_COMMENT}` + `/posts/`;
