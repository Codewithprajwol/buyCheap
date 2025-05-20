import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Earth, Globe2 } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const LanguageDropDown = () => {
    const {i18n}=useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <DropdownMenu >
      <DropdownMenuTrigger><Earth className='text-orange-500 cursor-pointer' size={24}/></DropdownMenuTrigger>
      <DropdownMenuContent >
        <DropdownMenuLabel className='font-light text-center  '>Language</DropdownMenuLabel>
        <DropdownMenuSeparator  />
        <DropdownMenuItem  onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('gr')}>Greek</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageDropDown