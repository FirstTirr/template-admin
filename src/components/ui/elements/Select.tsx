import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", ...props }, ref) => (
    <select
      ref={ref}
      className={"border rounded px-2 py-1 focus:outline-none " + className}
      {...props}
    />
  )
);

export default Select;
