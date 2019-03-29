/*

 Demo server with EdSDK Flmngr integrated.

 Run with command:
   node server.js
 and open the URL in browser:
   http://localhost:8080/

*/

require('@edsdk/flmngr-server').startFlmngrMicroservice({
	host: 'localhost',
	port: 8080,
	url: '/flmngr',
	dirRoot: './www',
	dirFiles: './www/files',
	uploader: {
		// add any additional parameters for uploader here
		// more info in the documentation of package @edsdk/file-uploader-server
	},
});
