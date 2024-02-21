import { useEffect, useRef } from "react";

const MyComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const items = itemRefs.current;
    const itemWidth = items[0]?.offsetWidth || 0; // Assuming all items have the same width
    const containerWidth = container?.offsetWidth || 0;
    const numItems = items.length;

    if (container && items.length > 0) {
      container.style.width = `${itemWidth * numItems}px`;

      items.forEach((item) => {
        item.style.width = `${containerWidth / numItems}px`;
      });

      container.innerHTML += container.innerHTML; // Duplicate the items to create an infinite loop effect
    }
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="item" ref={(el) => itemRefs.current.push(el!)}>
        Item 1
      </div>
      <div className="item" ref={(el) => itemRefs.current.push(el!)}>
        Item 2
      </div>
      <div className="item" ref={(el) => itemRefs.current.push(el!)}>
        Item 3
      </div>
      {/* Add more items as needed */}
    </div>
  );
};

export default MyComponent;
