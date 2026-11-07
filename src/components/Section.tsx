import { Link } from "react-router";
import './Section.css'
import type { ReactNode } from "react";

type SectionProps = {
  title: string,
  linkTo?: string,
  linkText?: string,
  children: ReactNode
}

export default function Section({title, linkTo, linkText, children}: SectionProps) {

  return (
    <section className="section">
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        {linkTo && (
          <Link to={linkTo} className="section__link">
            {linkText ?? "Смотреть все"}
          </Link>
        )}
      </div>
      <div className="section__content">
        {children}
      </div>
    </section>
  )
}