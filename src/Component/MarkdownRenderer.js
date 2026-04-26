export default function Renderer({ blocks }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case 'text':
        return <p key={index}>{block.value}</p>;

      case 'code':
        return (
          <pre key={index}>
            <code>{block.value}</code>
          </pre>
        );

      default:
        return null;
    }
  });
}