function Error({ statusCode }){
	return (
		<div className="bg-white absolute px-20 py-10 rounded-lg centeredDiv">
			<p className="flex items-center">
				<b>Error: _{statusCode}</b>{'_ '}error occured. 
				{ statusCode == 404 ? " Page not found." : null}
			</p>
		</div>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? (res.statusCode) : (err ? err.statusCode : 404)
	return { statusCode }
};

export default Error;