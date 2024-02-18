import React, { useState } from 'react'
interface CategoryProps{
    children: React.ReactNode
}
const Category:React.FC<CategoryProps> = ({children}) => {
    const [isSelected, setIsSelected] = useState(children);
    
  return (
    <div>
        
    </div>
  )
}

export default Category