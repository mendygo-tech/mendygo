import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    userId: string;
    username: string;
  };
}

export function authenticateToken(req: NextRequest): { isValid: boolean; user?: any; error?: string } {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return { isValid: false, error: 'No token provided' };
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    return { isValid: true, user };
  } catch (err) {
    return { isValid: false, error: 'Invalid token' };
  }
}

export function withAuth(handler: (req: AuthenticatedRequest) => Promise<Response>) {
  return async (req: NextRequest): Promise<Response> => {
    const authResult = authenticateToken(req);
    
    if (!authResult.isValid) {
      return new Response(
        JSON.stringify({ error: authResult.error }),
        { 
          status: authResult.error === 'No token provided' ? 401 : 403,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Add user to request object
    (req as AuthenticatedRequest).user = authResult.user;
    
    return handler(req as AuthenticatedRequest);
  };
}
