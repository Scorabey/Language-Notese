import styles from './Footer.module.scss'

export const Footer = () => {

    return (
        <footer>
            <h3>Made by Scorabey</h3>
            <p className={styles.description}>A simple notebook app for language learners. Track your vocabulary, practice new words, and improve your language skills. Created as a pet project to explore modern web development.</p>
            <p className={styles.openSource}>Open source project</p>
            <ul className={styles.footerLinks}>
                <li>
                    <span>Mail:</span> <a rel='noreferrer' href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=satlovdanijl@gmail.com" target='_blank'>satlovdanijl@gmail.com</a>
                </li>
                <li>
                    <span>GitHub:</span> <a rel='noreferrer' href="" target='_blank'>github.com/Scorabey</a>
                </li>
            </ul>
            <h5 className={styles.copyright}>© 2025 Language Note</h5>
        </footer>
    )
}

export default Footer