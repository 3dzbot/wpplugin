import {useBlockProps} from "@wordpress/block-editor";

export default function save() {
    const blockProps = useBlockProps.save();
    return <h1 {...blockProps}>Save 3</h1>;
}