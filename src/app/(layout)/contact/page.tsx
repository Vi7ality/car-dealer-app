import Container from '@/app/components/container';
import { FaTelegramPlane, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Page() {
  return (
    <>
      <main>
        <Container>
          <div className="rounded-lg bg-gray-100 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-600" />
                <a
                  href="mailto:svitalii138@gmail.com"
                  className="text-gray-700 hover:text-blue-500"
                >
                  svitalii138@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaTelegramPlane className="mr-3 text-gray-600" />
                <a
                  href="https://t.me/vi7ality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500"
                >
                  @vi7ality
                </a>
              </li>
              <li className="flex items-center">
                <FaGithub className="mr-3 text-gray-600" />
                <a
                  href="https://github.com/vi7ality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500"
                >
                  github.com/vi7ality
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </main>
    </>
  );
}
