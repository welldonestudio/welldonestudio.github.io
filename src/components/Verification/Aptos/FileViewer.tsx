import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function FileViewer({ code }: { code: any }) {
	return (
		<SyntaxHighlighter language="rust" style={github}>
			{code}
		</SyntaxHighlighter>
	);
}

export default FileViewer;