export const Text = ({value}) => {
    return (
            <span dangerouslySetInnerHTML={{__html: value}}/>
    );
};